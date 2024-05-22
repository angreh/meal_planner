import { Content } from "@components/pages/home/content";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

const Home = () => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Home Page</CardTitle>
      </CardHeader>

      <CardContent>
        <Content />
      </CardContent>
    </Card>
  );
};

export default Home;
