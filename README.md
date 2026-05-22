# 🚀 Prisma + TSOA + Swagger API

Este proyecto es una API REST desarrollada con **Node.js**, **TypeScript**, **Prisma ORM**, **TSOA** y **Swagger**, diseñada para gestionar información relacionada con empresas, contactos, oportunidades y actividades dentro de un sistema tipo CRM.

La aplicación implementa documentación automática de endpoints, validación tipada y conexión con base de datos PostgreSQL utilizando Prisma.

---

## 📌 Características

- API REST construida con **Express + TypeScript**.
- Integración con **Prisma ORM**.
- Base de datos configurada con **PostgreSQL**.
- Documentación automática con **Swagger UI**.
- Generación automática de rutas y especificaciones usando **TSOA**.
- Operaciones CRUD para contactos.
- Arquitectura modular y mantenible.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **TSOA**
- **Swagger UI**
- **Zod**
- **Body Parser**
- **Reflect Metadata**
- **Nodemon**

---

## 📁 Estructura del proyecto

```plaintext
taller-prisma-con-tsoa-y-swagger-main/
│
├── build/
│   ├── routes.ts
│   └── swagger.json
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   │   └── contact.controller.ts
│   │
│   ├── models/
│   │   └── contact.model.ts
│   │
│   ├── prisma/
│   │   └── client.ts
│   │
│   ├── routess/
│   │   └── contact.service.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── tsoa.json
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/prisma-tsoa-swagger.git
```

### 2. Entrar al proyecto

```bash
cd prisma-tsoa-swagger
```

### 3. Instalar dependencias

```bash
npm install
```

---

## 🔑 Configuración de variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
```

---

## 🗄️ Migraciones y Prisma

Generar cliente Prisma:

```bash
npm run prisma:generate
```

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

---

## ▶️ Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm run build
npm start
```

---

## 📚 Documentación Swagger

Generar documentación y rutas:

```bash
npm run tsoa
```

La documentación Swagger estará disponible en:

```plaintext
http://localhost:3000/docs
```

---

## 🧩 Modelos principales

### Company
Gestión de empresas registradas.

### Contact
Administración de contactos asociados a empresas.

### Opportunity
Seguimiento de oportunidades de negocio.

### Activity
Registro de actividades relacionadas con contactos y oportunidades.

---

## 🔒 Características técnicas

- Uso de TypeScript para tipado seguro.
- Prisma ORM para relaciones y consultas eficientes.
- Swagger para documentación interactiva.
- Arquitectura modular y mantenible.
- Validaciones utilizando Zod.

---

## 🚀 Posibles mejoras futuras

- Implementar autenticación JWT.
- Agregar roles y permisos.
- Dockerización del proyecto.
- Testing automatizado.
- Integración con frontend.
- Despliegue en la nube.

---

## 👩‍💻 Autor

**Valeria Andrea Osorio Santana**

---

## 📄 Licencia

Proyecto desarrollado con fines académicos y educativos.
