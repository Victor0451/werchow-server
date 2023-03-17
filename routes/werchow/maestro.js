const express = require("express");
const router = express.Router();
const maestro = require("../../models/werchow/maestro");
const mutual = require("../../models/werchow/mutual");
const cuofija = require("../../models/werchow/cuo_fija");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../../db/database");

//INSERT

router.post("/nuevo", (req, res) => {
  const newTitular = ({
    SUCURSAL,
    PLAN,
    SUB_PLAN,
    GRUPO,
    ZONA,
    OBRA_SOC,
    CONTRATO,
    APELLIDOS,
    MOVIL,
    OPERADOR,
    PRODUCTOR,
    CUOTA,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    RECIBO,
    SEXO,
    TELEFONO,
    CALLE,
    NRO_CALLE,
    DOMI_COBR,
    DOM_LAB,
    BARRIO,
    LOCALIDAD,
    EMPRESA,
    ESTADO,
  } = req.body);

  maestro
    .create(newTitular)
    .then((titular) => {
      res.status(200).json(titular);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//EDIT

router.put("/editar/:id", (req, res) => {
  const titularModf = ({
    SUCURSAL,
    PLAN,
    SUB_PLAN,
    GRUPO,
    ZONA,
    OBRA_SOC,
    CONTRATO,
    APELLIDOS,
    MOVIL,
    PRODUCTOR,
    CUOTA,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    SEXO,
    TELEFONO,
    CALLE,
    NRO_CALLE,
    DOMI_COBR,
    DOM_LAB,
    BARRIO,
    LOCALIDAD,
  } = req.body);

  maestro
    .update(
      {
        SUCURSAL: titularModf.SUCURSAL,
        PLAN: titularModf.PLAN,
        SUB_PLAN: titularModf.SUB_PLAN,
        GRUPO: titularModf.GRUPO,
        ZONA: titularModf.ZONA,
        OBRA_SOC: titularModf.OBRA_SOC,
        APELLIDOS: titularModf.APELLIDOS,
        MOVIL: titularModf.MOVIL,
        PRODUCTOR: titularModf.PRODUCTOR,
        CUOTA: titularModf.CUOTA,
        NACIMIENTO: titularModf.NACIMIENTO,
        ALTA: titularModf.ALTA,
        VIGENCIA: titularModf.VIGENCIA,
        NOMBRES: titularModf.NOMBRES,
        NRO_DOC: titularModf.NRO_DOC,
        SEXO: titularModf.SEXO,
        TELEFONO: titularModf.TELEFONO,
        CALLE: titularModf.CALLE,
        NRO_CALLE: titularModf.NRO_CALLE,
        DOMI_COBR: titularModf.DOMI_COBR,
        DOM_LAB: titularModf.DOM_LAB,
        BARRIO: titularModf.BARRIO,
        LOCALIDAD: titularModf.LOCALIDAD,
      },
      { where: { CONTRATO: titularModf.CONTRATO, ESTADO: 1 } }
    )
    .then((titularModf) => {
      res.status(200).json(titularModf);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

//BAJA

router.put("/baja/:id", (req, res) => {
  const contrato = req.params.id;

  let tmp = new Date(Date.now());
  let baja = tmp.toISOString().split("T")[0];

  maestro
    .update(
      {
        BAJA: baja,
        ESTADO: false,
      }, //what going to be updated
      { where: { CONTRATO: contrato } } // where clause
    )
    .then((titularModf) => {
      res.status(200).json(titularModf);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

//GET ALL

router.get("/titulares", (req, res, next) => {
  db.wSequelize
    .query(
      `
    select 
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN, 
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE, 
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL, 
    c.IMPORTE, 
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB , 
    m.TSEG , 
    "T" as "perfil", 
    o.NOMBRE "OBRA_SOC", 
    "W" as 'EMP'
    from maestro as m
    inner join cuo_fija as c on c.CONTRATO = m.CONTRATO
    inner join obra_soc as o on o.CODIGO = m.OBRA_SOC    
    order by m.GRUPO ASC
    `
    )
    .then((titulares) => {
      res.status(200).json(titulares);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/titularesm", (req, res, next) => {
  db.wSequelize
    .query(
      `
    select 
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN, 
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE, 
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL, 
    c.IMPORTE, 
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB , 
    m.TSEG , 
    "T" as "perfil", 
    o.NOMBRE "OBRA_SOC",
    "M" as 'EMP'
    from mutual as m
    inner join cuo_mutual as c on c.CONTRATO = m.CONTRATO
    inner join obra_soc as o on o.CODIGO = m.OBRA_SOC    
    order by m.GRUPO ASC
    `
    )
    .then((titulares) => {
      res.status(200).json(titulares);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET BY ID

router.get("/titular/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA,     
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL, 
    c.IMPORTE, 
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB, 
    m.TSEG, 
    "T" as "perfil", 
    o.NOMBRE "OBRA_SOC",
    o.CODIGO "COD_OBRA", 
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO,
    m.EMPRESA

    FROM maestro as m
    INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
    INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
    WHERE m.CONTRATO = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/titularbaja/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL,   
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB, 
    m.TSEG, 
    "T" as "perfil",    
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO

    FROM bajas as m   
    WHERE m.CONTRATO = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/titularbajadni/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA, 
    m.BAJA,
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL,   
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB, 
    m.TSEG, 
    "T" as "perfil",    
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO

    FROM bajas as m   
    WHERE m.NRO_DOC = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});



router.get("/titularm/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
      SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL, 
    c.IMPORTE, 
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB , 
    m.TSEG , 
    "T" as "perfil", 
    o.NOMBRE "OBRA_SOC",
    o.CODIGO "COD_OBRA", 
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO,
    m.EMPRESA
    FROM mutual as m
    INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
    INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
    WHERE m.CONTRATO = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/titularmbaja/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA, 
    m.BAJA,
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL,   
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB, 
    m.TSEG, 
    "T" as "perfil",    
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO

    FROM bajas_mutual as m   
    WHERE m.CONTRATO = ${id} 
       
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/titularmbajadni/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.GRUPO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.APELLIDOS,
    m.NOMBRES, 
    m.ALTA, 
    m.BAJA,
    m.VIGENCIA, 
    m.DOM_LAB, 
    m.PLAN,
    m.SUB_PLAN, 
    m.CALLE, 
    m.NRO_CALLE,
    m.BARRIO, 
    m.NACIMIENTO, 
    m.TELEFONO, 
    m.MOVIL, 
    m.MAIL,   
    m.PRODUCTOR, 
    m.LOCALIDAD, 
    m.DOM_LAB, 
    m.TSEG, 
    "T" as "perfil",    
    m.ADHERENTES, 
    TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
    m.SEXO

    FROM bajas_mutual as m   
    WHERE m.NRO_DOC = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

//GET CUOTA BY ID

router.get("/cuota/:id", (req, res) => {
  let id = req.params.id;

  cuofija
    .findOne({
      attributes: ["CONTRATO", "IMPORTE"],
      where: { CONTRATO: id },
    })
    .then((cuota) => res.json(cuota))
    .catch((err) => res.json(err));
});

//GET BY DNI

router.get("/titulardni/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
      SELECT
      m.CONTRATO, 
      m.GRUPO, 
      m.SUCURSAL, 
      m.NRO_DOC, 
      m.APELLIDOS,
      m.NOMBRES, 
      m.ALTA, 
      m.VIGENCIA, 
      m.DOM_LAB, 
      m.PLAN,
      m.SUB_PLAN, 
      m.CALLE, 
      m.NRO_CALLE,
      m.BARRIO, 
      m.NACIMIENTO, 
      m.TELEFONO, 
      m.MOVIL, 
      m.MAIL, 
      c.IMPORTE, 
      m.PRODUCTOR, 
      m.LOCALIDAD, 
      m.DOM_LAB , 
      m.TSEG , 
      "T" as "perfil", 
      o.NOMBRE "OBRA_SOC",
      o.CODIGO "COD_OBRA", 
      m.ADHERENTES, 
      TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
      m.SEXO,
      m.EMPRESA  
      FROM maestro as m
      INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
      INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
      WHERE m.NRO_DOC = ${id}  
  
  `
    )

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

//GET BY DNI MUTUAL

router.get("/titulardnim/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
      SELECT
      m.CONTRATO, 
      m.GRUPO, 
      m.SUCURSAL, 
      m.NRO_DOC, 
      m.APELLIDOS,
      m.NOMBRES, 
      m.ALTA, 
      m.VIGENCIA, 
      m.DOM_LAB, 
      m.PLAN,
      m.SUB_PLAN, 
      m.CALLE, 
      m.NRO_CALLE,
      m.BARRIO, 
      m.NACIMIENTO, 
      m.TELEFONO, 
      m.MOVIL, 
      m.MAIL, 
      c.IMPORTE, 
      m.PRODUCTOR, 
      m.LOCALIDAD, 
      m.DOM_LAB , 
      m.TSEG , 
      "T" as "perfil", 
      o.NOMBRE "OBRA_SOC",
      o.CODIGO "COD_OBRA", 
      m.ADHERENTES, 
      TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
      m.SEXO,
      m.EMPRESA
      FROM mutual as m
      INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
      INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
      WHERE m.NRO_DOC = ${id} 
  
  `
    )

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

//GET BY APELLIDO

router.get("/titularapellido/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
      SELECT
      m.CONTRATO, 
      m.GRUPO, 
      m.SUCURSAL, 
      m.NRO_DOC, 
      m.APELLIDOS,
      m.NOMBRES, 
      m.ALTA, 
      m.VIGENCIA, 
      m.DOM_LAB, 
      m.PLAN,
      m.SUB_PLAN, 
      m.CALLE, 
      m.NRO_CALLE,
      m.BARRIO, 
      m.NACIMIENTO, 
      m.TELEFONO, 
      m.MOVIL, 
      m.MAIL, 
      c.IMPORTE, 
      m.PRODUCTOR, 
      m.LOCALIDAD, 
      m.DOM_LAB , 
      m.TSEG , 
      "T" as "perfil", 
      o.NOMBRE "OBRA_SOC",
      o.CODIGO "COD_OBRA", 
      m.ADHERENTES, 
      TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
      m.SEXO,
      m.EMPRESA
      FROM maestro as m
      INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
      INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
      WHERE m.APELLIDOS like '${id}%'
  
  `
    )

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

//GET BY APELLIDO MUTUAL

router.get("/titulardnim/:id", (req, res) => {
  db.wSequelize
    .query(
      `
      SELECT
      m.CONTRATO, 
      m.GRUPO, 
      m.SUCURSAL, 
      m.NRO_DOC, 
      m.APELLIDOS,
      m.NOMBRES, 
      m.ALTA, 
      m.VIGENCIA, 
      m.DOM_LAB, 
      m.PLAN,
      m.SUB_PLAN, 
      m.CALLE, 
      m.NRO_CALLE,
      m.BARRIO, 
      m.NACIMIENTO, 
      m.TELEFONO, 
      m.MOVIL, 
      m.MAIL, 
      c.IMPORTE, 
      m.PRODUCTOR, 
      m.LOCALIDAD, 
      m.DOM_LAB , 
      m.TSEG , 
      "T" as "perfil", 
      o.NOMBRE "OBRA_SOC",
      o.CODIGO "COD_OBRA", 
      m.ADHERENTES, 
      TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
      m.SEXO,
      m.EMPRESA
      FROM mutual as m
      INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
      INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
      WHERE m.APELLIDOS like '${id}%'
  
  `
    )

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/adherentes/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.NACIMIENTO,
    m.PLAN,
    m.OBRA_SOC,
    m.SEXO,
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.NACIMIENTO,
    "A" as "perfil"
    FROM adherent as m    
    WHERE m.CONTRATO = ${id} 
    AND BAJA IS NULL
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/adherentesm/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.NACIMIENTO,
    m.PLAN,
    m.OBRA_SOC,
    m.SEXO,
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.NACIMIENTO,
    "A" as "perfil"
    FROM mutual_adh as m    
    WHERE m.CONTRATO = ${id} 
    AND BAJA IS NULL
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/adherente/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.NACIMIENTO,
    m.PLAN,
    m.OBRA_SOC,
    m.SEXO,
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.NACIMIENTO,
    m2.GRUPO 
    FROM adherent as m  
    INNER JOIN maestro as m2 on m.CONTRATO = m2.CONTRATO  
    WHERE m.NRO_DOC = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/adherentem/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
    SELECT
    m.CONTRATO, 
    m.SUCURSAL, 
    m.NRO_DOC, 
    m.NACIMIENTO,
    m.PLAN,
    m.OBRA_SOC,
    m.SEXO,
    m.APELLIDOS, 
    m.NOMBRES, 
    m.ALTA, 
    m.VIGENCIA, 
    m.NACIMIENTO,
    m2.GRUPO 
    FROM mutual_adh as m    
    INNER JOIN mutual as m2 on m.CONTRATO = m2.CONTRATO
    WHERE m.NRO_DOC = ${id} 
    
    
    `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

//GET LAST CONTRATO

router.get("/lastcontrato", (req, res) => {
  maestro
    .findOne({
      attributes: ["CONTRATO"],
      where: { ESTADO: 1 },
      order: [["CONTRATO", "DESC"]],
    })
    .then((maestro) => res.json(maestro))
    .catch((err) => res.json(err));
});

module.exports = router;
