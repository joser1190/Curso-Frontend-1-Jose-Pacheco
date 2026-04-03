// Definimos 3 parámetros: p1, p2 y p3 (puedes llamarlos como quieras)
function presentacionCompleta(nombre, apellido, edad = "indefinida") {
    console.log("Hola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.");
}

presentacionCompleta("Juan", "Pacheco", 20);
presentacionCompleta("Elena", "Pacheco", 20);
presentacionCompleta("Diego", "Pacheco");
