import { TextArea, Button, Icon } from "@/components";
export default async function Home() {
  return (
    <div className="relative z-10 mb-4 flex w-full flex-col gap-y-4">
      <TextArea />
      <div className="row-auto flex justify-center">
        <Button startIcon={<Icon icon={{ prefix: "fas", iconName: "cloud-arrow-up" }} />}>
          <p>Upload CSV</p>
        </Button>
        <Button startIcon={<Icon icon={{ prefix: "fas", iconName: "paper-plane" }} />}>
          <p>Send</p>
        </Button>
      </div>
    </div>
  );
}
