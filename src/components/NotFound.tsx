export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">404</h2>
        <div className="w-[.14rem] bg-black h-14 self-center mx-4"></div>
        <p className="text-lg">This page could not be found.</p>
      </div>
    </div>
  );
}
