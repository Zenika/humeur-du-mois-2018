import { Vote } from "./cast-vote";
const voteMap: { [key: string]: string } = {
  great: "Great 😁",
  notThatGreat: "So-so 😐",
  notGreatAtAll: "Bad 😤"
};

const composeEmailHtml = (vote: Vote) => {
  let comment = "";
  if (vote.comment) {
    comment = `
  <p>
    and left a comment:
    "${vote.comment}"
  </p>`;
  }
  return `
  <p>Hi ${vote.managerEmail},</p>
  <p>
    ${vote.fullName} has shared how they feel:
    <p style="font-size:50px; color:red;">"${voteMap[vote.value]}".</p>
  </p>${comment}
  <p>See you soon!</p>`;
};

export default composeEmailHtml;
