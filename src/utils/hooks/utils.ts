export const convertToLetter = (expertName: string, expertSurname?: string) => {
  const firstNameInitial = expertName.charAt(0);
  const surnameInitial = expertSurname ? expertSurname.charAt(0) : '';

  return `${firstNameInitial.toUpperCase()}${surnameInitial.toUpperCase()}`;
};
