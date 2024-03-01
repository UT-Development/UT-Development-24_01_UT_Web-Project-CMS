import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const firstName = "John";
  return (
    <div>
      <div>
        <h3 className="text-3xl">Good Morning {firstName ?? ""} 👋</h3>
        <h5 className="text-muted-foreground">Here&apos;s an overview of UT</h5>
      </div>
    </div>
  );
}
