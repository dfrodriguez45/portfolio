function Experience() {
  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800">
      <h2 className="text-center text-2xl font-bold">Experiencia</h2>
      <ul className="w-full border-l">
        <li className="relative w-full p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <div className="absolute -left-1.5 top-7 size-3 rounded-full bg-gray-400 md:top-14" />
              <h3 className="text-lg font-bold">Desarrollador Fullstack</h3>
              <p className="font-medium italic">Perla Technology</p>
              <p className="font-light">jul. 2022 - dic. 2023</p>
            </div>
            <img
              src="experience/perla-technology.webp"
              alt="Perla Technology"
              className="w-3/4 md:w-1/3"
              width={1081}
              height={357}
              loading="lazy"
            />
          </div>
          <ul className="mt-4 list-inside list-disc">
            <li className="list-item">
              Participar en reuniones para discutir requisitos y progreso del
              proyecto.
            </li>
            <li className="list-item">
              Configurar Firebase para autenticación, base de datos y funciones
              en la nube.
            </li>
            <li className="list-item">
              Convertir la interfaz móvil a una aplicación web usando React.
            </li>
            <li className="list-item">
              Integrar la aplicación web con Firebase para autenticación y base
              de datos.
            </li>
            <li className="list-item">
              Identificar y corregir errores durante el desarrollo y las
              pruebas.
            </li>
            <li className="list-item">
              Desplegar la aplicación web en el servicio de hosting de Firebase.
            </li>
            <li className="list-item">
              Monitorear el rendimiento, corregir errores y mejorar la
              aplicación.
            </li>
            <li className="list-item">
              Escribir documentación para facilitar la comprensión y
              mantenimiento del código.
            </li>
          </ul>
        </li>
        <li className="relative w-full p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <div className="absolute -left-1.5 top-7 size-3 rounded-full bg-gray-400 md:top-14" />
              <h3 className="text-lg font-bold">
                Aprendiz Desarrollador de Software
              </h3>
              <p className="font-medium italic">SoftwareOne Colombia</p>
              <p className="font-light">abr. 2023 - oct. 2023</p>
            </div>
            <img
              src="experience/softwareone.webp"
              alt="SoftwareOne Colombia"
              className="w-3/4 md:w-1/3"
              width={1592}
              height={560}
              loading="lazy"
            />
          </div>
          <ul className="mt-4 list-inside list-disc">
            <li className="list-item">
              Participar en reuniones diarias de Scrum (Daily) para coordinar
              tareas.
            </li>
            <li className="list-item">
              Revisar y comprender los requisitos del cliente para los nuevos
              componentes.
            </li>
            <li className="list-item">
              Diseñar componentes React basados en los requisitos del cliente.
            </li>
            <li className="list-item">
              Escribir código de componentes React con reutilización.
            </li>
            <li className="list-item">
              Realizar pruebas unitarias y de integración para los nuevos
              componentes.
            </li>
            <li className="list-item">
              Integrar los nuevos componentes en la aplicación existente.
            </li>
            <li className="list-item">
              Revisar el código con el equipo para asegurar calidad y
              cumplimiento de estándares.
            </li>
            <li className="list-item">
              Desplegar y probar los componentes en un entorno de desarrollo.
            </li>
            <li className="list-item">
              Participar en reuniones de Sprint Review para presentar los
              avances al cliente y obtener feedback.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
