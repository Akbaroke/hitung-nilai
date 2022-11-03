$('#hitung').click((e) => {
  e.preventDefault();
  const absen = $('#absen').val();
  const tugas = $('#tugas').val();
  const uts = $('#uts').val();
  const uas = $('#uas').val();

  const nilai = {
    angka: '0',
    huruf: '0',
    ip: '0',
  };

  let hitungAngka = 0.4 * absen + 0.1 * tugas + 0.2 * uts + 0.3 * uas;
  nilai['angka'] = hitungAngka;

  na = parseInt(nilai.angka);
  na >= 85
    ? (nilai['huruf'] = 'A')
    : na >= 80 && na <= 84
    ? (nilai['huruf'] = 'A-')
    : na >= 75 && na <= 79
    ? (nilai['huruf'] = 'B+')
    : na >= 70 && na <= 74
    ? (nilai['huruf'] = 'B')
    : na >= 65 && na <= 69
    ? (nilai['huruf'] = 'B-')
    : na >= 60 && na <= 64
    ? (nilai['huruf'] = 'C+')
    : na >= 55 && na <= 59
    ? (nilai['huruf'] = 'C')
    : na >= 50 && na <= 54
    ? (nilai['huruf'] = 'C-')
    : na >= 40 && na <= 50
    ? (nilai['huruf'] = 'D')
    : na < 40
    ? (nilai['huruf'] = 'E')
    : (nilai['huruf'] = '0');

  let hitungIp = hitungAngka / 20 - 1;
  hitungIp <= 0 ? (nilai['ip'] = 0) : (nilai['ip'] = hitungIp.toFixed(2));

  $('#nilai-akhir').val(nilai.angka);
  $('#nilai-huruf').val(nilai.huruf);
  $('#nilai-ip').val(nilai.ip);
});

$('#clear').click(function (e) {
  e.preventDefault();
  $('#absen').val('');
  $('#tugas').val('');
  $('#uts').val('');
  $('#uas').val('');
  $('#nilai-akhir').val('0');
  $('#nilai-huruf').val('0');
  $('#nilai-ip').val('0');
});
