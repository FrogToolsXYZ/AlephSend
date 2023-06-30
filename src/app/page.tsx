import { TextArea } from "@/components";
export default async function Home() {
  return (
    <div className="relative z-10 mb-4 flex w-full flex-col gap-y-4">
      <p> Hello World </p>
      <TextArea />
    </div>
  );
}
