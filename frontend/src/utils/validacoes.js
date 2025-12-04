export function validarRegistro(nome, email, senha) {
  // Nome
  if (!nome || nome.length < 3 || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
    return "O nome deve ter pelo menos 3 letras e não conter números.";
  }

  // Email
  const emailRegex = /^[A-Za-z0-9._%+-]{2,}@gmail\.com$/;
  if (!emailRegex.test(email)) {
    return "O email deve terminar com @gmail.com e ter pelo menos 2 caracteres antes.";
  }

  // Senha
  if (!senha || senha.length < 4) {
    return "A senha deve ter pelo menos 4 caracteres.";
  }

  return null; // válido
}
