function voyageRisk(voyage) {
  let result = 1;
  result += calculateResultByLengthFromVoyage(voyage , 4 , 2);
  result += calculateResultByLengthFromVoyage(voyage , 8 , voyage.length - 8);
  result += calculateResultByZoneFromVoyage(voyage, 4)
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  result += calculateResultByLengthFromVoyage(voyage , 5 , 4);
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function calculateResultByZoneFromVoyage(voyage, count) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone) ? count : 0;
}

function calculateResultByLengthFromVoyage(voyage, tmp, count) {
  return voyage.length > tmp ? count : 0;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  result += calculateResultByZoneFromVoyage(voyage, 1)

  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    result += calculateResultByLengthFromVoyage(voyage, 12, 1);
    result += calculateResultByLengthFromVoyage(voyage, 18, -1);
  } else {
    if (history.length > 8) {
      result += 1;
    }
    result += calculateResultByLengthFromVoyage(voyage, 14, -1);

  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

module.exports = rating;