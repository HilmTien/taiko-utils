import InteractiveODComponent from "@/components/od/interactive/InteractiveODApp";
import ODTableApp from "@/components/od/table/ODTableApp";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import { ODStateProvider } from "./ODState";

export default function ODApp() {
  return (
    <ODStateProvider>
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
    </ODStateProvider>
  );
}
