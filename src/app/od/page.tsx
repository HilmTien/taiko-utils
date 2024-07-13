import InteractiveODComponent from "@/components/od/InteractiveODComponent";
import ODTableApp from "@/components/od/table/ODTableApp";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";

export default function Page() {
  return (
    <main className="p-8">
      <Tabs defaultValue="table">
        <TabsList>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="interactive">Interactive</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <ODTableApp />
        </TabsContent>
        <TabsContent value="interactive">
          <InteractiveODComponent />
        </TabsContent>
      </Tabs>
    </main>
  );
}
