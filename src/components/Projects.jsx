const Projects = () => (
  <section className="container my-5">
    <h2 className="mb-4">Projects</h2>
    <div className="row g-4 animate__animated animate__fadeInUp">
      {[
        {
          title: "Payroll Input System",
          desc: "Developed backend APIs using .NET Core and frontend using React.js..."
        },
        {
          title: "SupportZone",
          desc: "Built secure APIs for ServiceNow integration and incident management..."
        },
        {
          title: "FHSquare (E-Commerce)",
          desc: "Full stack project using .NET Core and React.js to build a scalable e-commerce platform..."
        }
      ].map((project, idx) => (
        <div key={idx} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
