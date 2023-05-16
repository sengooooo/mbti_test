$('#question').hide();
$('#result').hide();

var num = 1;

var q = {
  1: { title: '첫 번째 질문', type: 'EI', A: 'E', B: 'I' },
  2: { title: '두 번째 질문', type: 'SN', A: 'S', B: 'N' },
  3: { title: '세 번째 질문', type: 'FT', A: 'F', B: 'T' },
  4: { title: '네 번째 질문', type: 'JP', A: 'J', B: 'P' },
};

var result = {
  ESFP: { mbti: 'esfp' },
  ESFJ: { mbti: 'esfj' },
  ESTP: { mbti: 'estp' },
  ESTJ: { mbti: 'estj' },
  ENFP: { mbti: 'enfp' },
  ENFJ: { mbti: 'enfj' },
  ENTP: { mbti: 'entp' },
  ENTJ: { mbti: 'entj' },
  ISFP: { mbti: 'isfp' },
  ISFJ: { mbti: 'isfj' },
  ISTP: { mbti: 'istp' },
  ISTJ: { mbti: 'istj' },
  INFP: { mbti: 'infp' },
  INFJ: { mbti: 'infj' },
  INTP: { mbti: 'intp' },
  INTJ: { mbti: 'intj' },
};

function start() {
  $('#start').hide();
  $('#question').show();
  next();
}

function next() {
  if (num == 4) {
    $('#question').hide();
    $('#result').show();
    var str = '';
    $('#EI').val() < 1 ? (str += 'I') : (str += 'E');
    $('#SN').val() < 1 ? (str += 'N') : (str += 'S');
    $('#FT').val() < 1 ? (str += 'T') : (str += 'F');
    $('#PJ').val() < 1 ? (str += 'P') : (str += 'J');

    $('#mbti').html(result[str]['mbti']);
  } else {
    $('.progress-bar').attr('style', 'width: calc(100/4*' + num + '%)');
    $('#pgrNum').html(num + '/3');
    $('#title').html(q[num]['title']);
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    num++;
  }
}

$('#A').click(function () {
  var type = $('#type').val();
  var preValue = $('#' + type).val();
  $('#' + type).val(parseInt(preValue) + 1);
  next();
});
$('#B').click(function () {
  next();
});
