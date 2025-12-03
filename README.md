# 📁 Documentación de Desarrollo – MiniWorks (Flujo de 8 Pantallas)

Este documento describe el flujo funcional representado en las **8 pantallas prototipo** de MiniWorks.  
El objetivo es mostrar cómo navega el usuario desde el inicio hasta las funciones básicas según su rol.

---

# 🔄 Breve descripción del flujo

El flujo inicia en la pantalla de **Login**, donde el usuario accede o decide registrarse.  
Si elige registrarse, selecciona si es **Estudiante** o **Empleador** y completa el formulario correspondiente.  
Una vez dentro, el sistema lo redirige a su **dashboard**, que cambia según el rol.  
Desde ahí, el estudiante puede ver trabajos y postular, mientras que el empleador puede crear y gestionar ofertas.  
Ambos pueden acceder a su **perfil de usuario** para revisar o actualizar sus datos.

Este flujo representa el camino principal que recorre un nuevo usuario al interactuar con la aplicación.

---

# 🖼️ Pantallas del Flujo (8)

A continuación se detallan las ocho pantallas, su propósito, sus componentes y un espacio para agregar la captura correspondiente.

---

## 1️⃣ Pantalla: **Login / Bienvenida**
**Propósito:** Permitir al usuario iniciar sesión o navegar hacia el registro.  
**Componentes principales:**  
- Formulario de email y contraseña  
- Botón *Iniciar Sesión*  
- Enlace *Crear cuenta*  
- Opción *Recordarme*

**Captura:**  
![login](/docs/img/login.png)

---

## 2️⃣ Pantalla: **Selección de Rol**
**Propósito:** Que el usuario escoja si es Estudiante o Empleador antes de registrarse.  
**Componentes principales:**  
- Botón *Soy Estudiante*  
- Botón *Soy Empleador*  
- Indicaciones breves

**Captura:**  
![rol](/docs/img/rol.png)

---

## 3️⃣ Pantalla: **Registro**
**Propósito:** Crear una cuenta según el rol escogido.  
**Componentes principales:**  
- Formulario de datos personales  
- Campos adicionales según el rol  
- Botón *Registrarme*  
- Validaciones básicas

**Captura:**  
![registro](/docs/img/registro.png)

---

## 4️⃣ Pantalla: **Dashboard Estudiante**
**Propósito:** Mostrar al estudiante las ofertas disponibles y su historial de postulaciones.  
**Componentes principales:**  
- Lista de trabajos en tarjetas  
- Botón *Postular*  
- Filtros de búsqueda  
- Sección *Mis Postulaciones*

**Captura:**  
![dashboard-est](/docs/img/dashboard-estudiante.png)

---

## 5️⃣ Pantalla: **Dashboard Empleador**
**Propósito:** Gestionar las ofertas creadas y visualizar postulantes.  
**Componentes principales:**  
- Botón *Crear Oferta*  
- Lista de ofertas publicadas  
- Acciones: editar, cerrar, eliminar  
- Sección *Postulantes*

**Captura:**  
![dashboard-emp](/docs/img/dashboard-empleador.png)

---

## 6️⃣ Pantalla: **Detalles de Trabajo**
**Propósito:** Mostrar la información completa de una oferta laboral.  
**Componentes principales:**  
- Descripción del trabajo  
- Requisitos  
- Remuneración  
- Botón *Postular* (estudiante)  
- Botón *Ver postulantes* (empleador)

**Captura:**  
![detalles](/docs/img/detalles.png)

---

## 7️⃣ Pantalla: **Crear / Editar Oferta**
**Propósito:** Permitir al empleador crear o modificar una oferta laboral.  
**Componentes principales:**  
- Formulario: título, descripción, habilidades, remuneración  
- Selector de categoría  
- Botón *Publicar*  
- Previsualización

**Captura:**  
![crear](/docs/img/crear-oferta.png)

---

## 8️⃣ Pantalla: **Perfil de Usuario**
**Propósito:** Mostrar y permitir actualizar la información del usuario.  
**Componentes principales:**  
- Datos personales  
- Rol del usuario  
- Botón *Editar*  
- Preferencias / Configuración básica

**Captura:**  
![perfil](/docs/img/perfil.png)

---

# 📌 Notas finales
Las imágenes deben almacenarse en: /docs/img/ y deben llevar el mismo nombre usado en cada referencia.

