
export const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">About Fix-Up</h2>
          <p className="text-muted-foreground">
            We're revolutionizing home maintenance by connecting homeowners with trusted professionals
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <p className="text-lg text-muted-foreground">
              Fix-Up was born from a simple idea: making home repairs and maintenance hassle-free. 
              We understand the challenges of finding reliable professionals when you need them most.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform connects you with vetted, skilled professionals in your area, ensuring 
              quality service every time. With real-time tracking and secure payments, we're making 
              home maintenance as simple as a few taps on your phone.
            </p>
          </div>
          <div className="glass rounded-2xl p-2 shadow-xl fade-in">
            <img
              src="src\components\marketing\Images\image11.jpg"
              alt="Fix-Up Platform"
              className="rounded-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
