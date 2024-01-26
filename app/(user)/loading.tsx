import InfinitySpin from "@components/Spinner";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <InfinitySpin color="#FF0000" width="100" />
    </div>
  );
}
