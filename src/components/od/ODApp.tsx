import InteractiveODComponent from "@/components/od/interactive/InteractiveODApp";
import ODTableApp from "@/components/od/table/ODTableApp";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/Tabs";
import { ODStateProvider } from "./ODState";

export default function ODApp() {
  return (
    <ODStateProvider>
      <Tabs className="flex flex-col items-center" defaultValue="interactive">
        <TabsList>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="interactive">Interactive</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <ODTableApp />
        </TabsContent>
        <TabsContent className="w-full flex justify-center" value="interactive">
          <InteractiveODComponent />
        </TabsContent>
      </Tabs>
    </ODStateProvider>
  );
}
