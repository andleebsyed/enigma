import CircularProgress from "@material-ui/core/CircularProgress";
export function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}
