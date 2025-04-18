const Skills = () => (
  <section className="container my-5">
    <h2 className="mb-4">Skills</h2>
    <div className="row row-cols-2 g-3 animate__animated animate__fadeInUp">
      {[
        ".NET Core (6.0/7.0/8.0)", "React JS", "Entity Framework", "ASP.NET MVC",
        "Hangfire", "CI/CD", "Microsoft Graph API", "MSSQL Server"
      ].map((skill, i) => (
        <div key={i} className="col">
          <div className="card p-3 shadow-sm">{skill}</div>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;
