export const convertToLetter = (name: string, surname?: string) => {
  const firstNameInitial = name.charAt(0);
  const surnameInitial = surname ? surname.charAt(0) : '';

  return `${firstNameInitial.toUpperCase()}${surnameInitial.toUpperCase()}`;
};
