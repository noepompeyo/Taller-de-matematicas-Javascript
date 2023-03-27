console.log(salarios);

//ANALICIS DE SALARIOS

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  // console.log(salarios)
  // console.log(medianaSalarios)
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const cresimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = cresimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }
  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
    porcentajesCrecimiento
  );
  console.log({ porcentajesCrecimiento, medianaPorcentajeCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;
  console.log(nuevoSalario);
  return nuevoSalario;
}

// pagos por empresa

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
console.log({ empresas });
function medianaPorEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("lA EMPRESA NO EXISTE");
  } else if (!empresas[nombre][year]) {
    console.warn("La empresa no dio salarios ese año");
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("lA EMPRESA NO EXISTE");
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaPorEmpresaYear(nombre, year);
    });
    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const cresimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = cresimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
      porcentajesCrecimiento
    );

    const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimoMediana * medianaPorcentajeCrecimiento;
    const nuevaMediana = ultimoMediana + aumento;
    console.log(nuevaMediana);
    return nuevaMediana;
  }
}

// analicis general

function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );
  const mediana = PlatziMath.calcularMediana(listaMedianas);
  return mediana;
}

function MedianaTop10 () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    console.log({medianasOrdenadas, top10})
    const medianatop10 = PlatziMath.calcularMediana(top10);
    return medianatop10;
}

