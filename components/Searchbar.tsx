import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Searchbar() {
  return (
    <div className="p-4 shadow-md">
      <div className="container mx-auto mt-8">
        <Tabs defaultValue="buy">
          <TabsList className="bg-transparent flex gap-4 p-4 rounded-t-lg">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="rent">Rent</TabsTrigger>
          </TabsList>
          <TabsContent
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            value="buy"
          >
            <Select>
              <SelectTrigger id="propertyType">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Duplex">Duplex</SelectItem>
                <SelectItem value="Labour">Labour</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
                <SelectItem value="Industrial">Industrial</SelectItem>
                <SelectItem value="Hotel Apartment">Hotel Apartment</SelectItem>
                <SelectItem value="Land Residential">
                  Land Residential
                </SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
                <SelectItem value="Residential Building">
                  Residential Building
                </SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Multiple Sale Units">
                  Multiple Sale Units
                </SelectItem>
                <SelectItem value="Loft Apartment">Loft Apartment</SelectItem>
                <SelectItem value="Land Mixed Use">Land Mixed Use</SelectItem>
                <SelectItem value="Compound">Compound</SelectItem>
                <SelectItem value="Half Floor">Half Floor</SelectItem>
                <SelectItem value="Full Floor">Full Floor</SelectItem>
                <SelectItem value="Bungalow">Bungalow</SelectItem>
                <SelectItem value="Staff Accommodation">
                  Staff Accommodation
                </SelectItem>
                <SelectItem value="Multiple Residential Units">
                  Multiple Residential Units
                </SelectItem>
                <SelectItem value="Residential Full Floor">
                  Residential Full Floor
                </SelectItem>
                <SelectItem value="Residential Half Floor">
                  Residential Half Floor
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="new-york">Dubai</SelectItem>
                <SelectItem value="los-angeles">Abu Dhabi</SelectItem>
                <SelectItem value="chicago">Sharjah</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="bed"
              placeholder="Bed"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="bath"
              placeholder="Bath"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="keywords"
              placeholder="Keywords"
              type="text"
            />
            <Select>
              <SelectTrigger id="furnishingPrefernces">
                <SelectValue placeholder="Furnishing Prefernces" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="furnished">Partially Furnished</SelectItem>
                <SelectItem value="non-furnished">Non-Furnished</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="minArea"
              placeholder="Min. Area (sqft)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxArea"
              placeholder="Max. Area (sqft)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxPrice"
              placeholder="Min. Price (AED)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxPrice"
              placeholder="Max. Price (AED)"
              type="number"
            />
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <Button className="bg-red-600">Apply Filters</Button>
            </div>
          </TabsContent>

          <TabsContent
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            value="rent"
          >
            <Select>
              <SelectTrigger id="propertyType">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Duplex">Duplex</SelectItem>
                <SelectItem value="Labour">Labour</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
                <SelectItem value="Industrial">Industrial</SelectItem>
                <SelectItem value="Hotel Apartment">Hotel Apartment</SelectItem>
                <SelectItem value="Land Residential">
                  Land Residential
                </SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
                <SelectItem value="Residential Building">
                  Residential Building
                </SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Multiple Sale Units">
                  Multiple Sale Units
                </SelectItem>
                <SelectItem value="Loft Apartment">Loft Apartment</SelectItem>
                <SelectItem value="Land Mixed Use">Land Mixed Use</SelectItem>
                <SelectItem value="Compound">Compound</SelectItem>
                <SelectItem value="Half Floor">Half Floor</SelectItem>
                <SelectItem value="Full Floor">Full Floor</SelectItem>
                <SelectItem value="Bungalow">Bungalow</SelectItem>
                <SelectItem value="Staff Accommodation">
                  Staff Accommodation
                </SelectItem>
                <SelectItem value="Multiple Residential Units">
                  Multiple Residential Units
                </SelectItem>
                <SelectItem value="Residential Full Floor">
                  Residential Full Floor
                </SelectItem>
                <SelectItem value="Residential Half Floor">
                  Residential Half Floor
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="new-york">Dubai</SelectItem>
                <SelectItem value="los-angeles">Abu Dhabi</SelectItem>
                <SelectItem value="chicago">Sharjah</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="bed"
              placeholder="Bed"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="bath"
              placeholder="Bath"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="keywords"
              placeholder="Keywords"
              type="text"
            />
            <Select>
              <SelectTrigger id="furnishingPrefernces">
                <SelectValue placeholder="Furnishing Prefernces" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="furnished">Partially Furnished</SelectItem>
                <SelectItem value="non-furnished">Non-Furnished</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="minArea"
              placeholder="Min. Area (sqft)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxArea"
              placeholder="Max. Area (sqft)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxPrice"
              placeholder="Min. Price (AED)"
              type="number"
            />
            <Input
              className="placeholder:dark:text-white placeholder:text-black"
              id="maxPrice"
              placeholder="Max. Price (AED)"
              type="number"
            />
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <Button className="bg-red-600 text-black dark:">Apply Filters</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
