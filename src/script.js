"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

// 0 === false!!!
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};

const attackPlayer = (health) => health - randomDamage();

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0;

const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};

const getGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};
console.log(getGrade());

const prioritize = (urgent, important) => {
  if (urgent === false && important === true) {
    return `1. Important, not Urgent.`;
  } else if (urgent === true && important === false) {
    return `2. Urgent, not Important.`;
  } else if (urgent === false && important === false) {
    return `3. Neither Urgent nor Important.`;
  } else {
    return `4.`;
  }
};
console.log(prioritize());

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    const overTime = hours % 40;
    const overTimeRate = wage * 1.5;
    const paid = wage * 40;
    const overTimePay = overTimeRate * overTime;
    const overTimeTotal = paid + overTimePay;
    return `Paid: ${paid}. Overtime: ${overTime} hours. Overtime Rate: ${overTimeRate} per hour. Bonus Payment: ${overTimePay}. Total: ${overTimeTotal}.`;
  } else {
    const paid = wage * hours;
    return `Paid: ${paid}`;
  }
};
console.log(calculatePay());
