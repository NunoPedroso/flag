/* export const isEmailValid = (email) => {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
} */

// Validate if email is valid
export const isEmailValid = email => /\S+@\S+\.\S+/.test(email);

// Validate if field is not empty
export const isNotEmpty = field => field.length >= 3;