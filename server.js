const { faker } = require('@faker-js/faker');//importamos faker para datos aleatorios
const express  = require('express');//importamos express

const app = express();

const objUsuario = () =>({
  _id : faker.datatype.uuid(),
  nombre : faker.name.firstName(),
  apellido : faker.name.lastName(),
  telefono : faker.phone.phoneNumber(),
  email : faker.internet.email(),
  password : faker.internet.password()
})

const objEmpresa = () => ({
  _id : faker.datatype.uuid(),
  nombre : faker.company.companyName(),
  direccion: {
    calle: faker.address.streetAddress(),
    ciudad : faker.address.city(),
    estado : faker.address.state(),
    cp : faker.address.zipCode(),
    pais : faker.address.country()
  }
})

app.get("/api/users/new", (req, res) => {
  const nuevoUsuario = objUsuario();
  res.json(nuevoUsuario);
});

app.get("/api/companies/new", (req, res) => {
  const nuevaEmpresa = objEmpresa();
  res.json(nuevaEmpresa);
});

app.get("/api/users/companies/new", (req, res) => {
  const nuevaEmpresa = objEmpresa();
  const nuevoUsuario = objUsuario();
  res.json({nuevoUsuario,nuevaEmpresa});
});



app.listen(8000, () => console.log('Servidor corriendo')); //Ejecutando o ejecutando el server
