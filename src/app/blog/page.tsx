export default function BlogPage() {
  return (
    <div className="flex min-h-screen justify-center bg-black bg-cover bg-center bg-no-repeat text-white">
      <div className="flex w-full items-center justify-center">
        <div className="relative w-full max-w-4xl px-4 pb-56 pt-4 md:pb-64 md:pt-6 lg:pb-72 lg:pt-8">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/pjRpR9gYN4g"
            title="Hayot Istamov YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
