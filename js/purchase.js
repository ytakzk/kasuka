var host = 'https://ytakzk.github.io/kasuka/';
var total = 0;
$(function(){
  numChanged();
});

function numChanged() {
  var valText = $('#purchase [name=number]').val();
  var val = Number(valText)*1800 || 0;
  // console.log(val);
  total = val + 700;
  $('#amount').text(val);
  $('#total').text(total);
}
