import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "../../components/gfg/Navbar";

export default function Problems() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1a2634] p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <Button variant="destructive" size="sm" className="text-xs">
              CLEAR ALL
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">COMPANIES</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="amazon" />
                  <label htmlFor="amazon" className="text-sm">
                    Amazon (611)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="microsoft" />
                  <label htmlFor="microsoft" className="text-sm">
                    Microsoft (418)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="flipkart" />
                  <label htmlFor="flipkart" className="text-sm">
                    Flipkart (163)
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">TOPICS</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="arrays" />
                  <label htmlFor="arrays" className="text-sm">
                    Arrays (726)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="strings" />
                  <label htmlFor="strings" className="text-sm">
                    Strings (413)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="linkedlist" />
                  <label htmlFor="linkedlist" className="text-sm">
                    Linked List (102)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Problems</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
              <Select defaultValue="submissions">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="submissions">Sort: Submissions</SelectItem>
                  <SelectItem value="difficulty">Sort: Difficulty</SelectItem>
                  <SelectItem value="accuracy">Sort: Accuracy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-[#1d4d4f] text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    160 Days of Daily Problem Solving
                  </h2>
                  <p>
                    160 Handpicked DSA problems for organized practice. Better
                    than any SDE Sheets!
                  </p>
                </div>
                <Button variant="secondary">Get Started</Button>
              </div>
            </Card>

            {/* Problem Items */}
            <div className="space-y-4">
              {[
                {
                  title: "Indexes of Subarray Sum",
                  companies: ["Amazon", "Facebook"],
                  difficulty: "Medium",
                  submissions: "2M",
                  accuracy: "16.5%",
                },
                {
                  title: "Missing in Array",
                  companies: ["Flipkart", "Morgan Stanley"],
                  difficulty: "Easy",
                  submissions: "1M",
                  accuracy: "29.59%",
                },
              ].map((problem, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {problem.title}
                      </h3>
                      <div className="flex gap-2">
                        {problem.companies.map((company, i) => (
                          <Badge key={i} variant="secondary">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          {problem.difficulty}
                        </span>{" "}
                        · {problem.submissions} · {problem.accuracy}
                      </div>
                      <Button variant="outline">Solve</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
