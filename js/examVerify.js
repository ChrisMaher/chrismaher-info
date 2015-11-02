
  $(document).ready(function() {

    $('#resultarea').hide();
    $.validator.addMethod("fulltextlast", function(value, element) {
      return this.optional(element) || /(^[A-Z][a-z\']{2,})+([ ][A-Z][a-zA-Z\']{2,})*$/.test(value);
    });

    var ruleSet = {
     required: true,
     digits: true,
     range:[0,100]
   };

   $('#coursedata :text')[0].focus();
   $('#coursedata').validate({
     rules: {
       name: {
         required: true,
         fulltextlast: true
       },
       CA1: ruleSet,
       CA2: ruleSet,
       CA3: ruleSet,
       Exam: ruleSet

   }, //end rules
   messages: {
    name: {
      required: "Please supply a name.",
      fulltextlast: "This is not a valid name. Please include letters, apostrophes,  and spaces only."
    }

  },
  submitHandler: function (form) {
    name =$('#name').val();
    ca1=parseInt($('#CA1').val());
    ca2=parseInt($('#CA2').val());
    ca3=parseInt($('#CA3').val());
    exam=parseInt($('#Exam').val());
    totalmark = ((ca1+ca2+ca3)/3)*.5 + exam*.5;

    $('#resultarea').css('display','block');
    $('#Result').val(Math.round(totalmark));
    return false;
  }
  }); // end validate



}); // end ready()
