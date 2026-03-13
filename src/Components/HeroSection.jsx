function HeroSection({ imgUrl, children }) {
  const styles = {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    ), url(${imgUrl})`,
  };

  return (
    <div
      style={styles}
      className="relative h-170 w-full bg-cover bg-center bg-no-repeat lg:h-215 tranaition-colors"
    >
      {children}
    </div>
  );
}

export default HeroSection;
