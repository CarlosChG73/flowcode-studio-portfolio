// Estado de React
import { useState } from "react";

// Íconos de enlaces profesionales
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// Componentes UI
import Button from "../ui/Button";
import Card from "../ui/Card";

// Enlaces profesionales
const professionalLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/CarlosChG73",
    icon: SiGithub,
    color: "#8B949E",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carloschavezg73",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
];

// Estado inicial del formulario
const initialFormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

// Sección de contacto
function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // Actualiza los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  // Envía el formulario al backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      setFormStatus({
        type: "success",
        message: data.message || "Mensaje enviado correctamente.",
      });

      setFormData(initialFormState);
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message || "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-slate-200 px-5 py-14 transition-colors sm:px-6 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        {/* Encabezado de sección */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Contacto
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Contacto profesional
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            Este apartado está destinado a la comunicación profesional
            relacionada con oportunidades laborales, colaboración en proyectos o
            solicitudes de información adicional sobre el perfil presentado.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            El CV completo y los datos de contacto complementarios se encuentran
            disponibles para procesos profesionales que requieran información
            adicional.
          </p>
        </div>

        {/* Enlaces profesionales */}
        <div className="mb-7 flex flex-col justify-center gap-3 sm:flex-row">
          {professionalLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Button
                key={link.id}
                href={link.href}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon
                    className="h-4 w-4"
                    style={{ color: link.color }}
                    aria-hidden="true"
                  />
                  {link.label}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Formulario de contacto */}
        <Card as="form" className="sm:p-8" onSubmit={handleSubmit}>
          {/* Encabezado del formulario */}
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              Formulario de contacto
            </h3>
          </div>

          {/* Campo oculto antispam */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Campo nombre */}
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Nombre
            </span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
            />
          </label>

          {/* Campo correo */}
          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Correo
            </span>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
            />
          </label>

          {/* Campo mensaje */}
          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Mensaje
            </span>
            <textarea
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
            />
          </label>

          {/* Mensaje de estado */}
          {formStatus.message && (
            <p
              className={`mt-5 rounded-xl px-4 py-3 text-sm ${
                formStatus.type === "success"
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                  : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
              }`}
            >
              {formStatus.message}
            </p>
          )}

          {/* Botón de envío */}
          <Button
            type="submit"
            variant="primary"
            className="mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
