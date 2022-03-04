import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div style={{ minHeight: 736, display: "flex" }}>
      <CircularProgress style={{ margin: "auto" }} color="secondary" />
    </div>
  );
};

export default Loading;
