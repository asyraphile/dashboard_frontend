import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1128px]">
        <Input
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8c8787ff" />
            ) : (
              <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
            )
          }
          className="w-[29%] gap-[35px] border-gray-50"
        />
        <div className="flex flex-row justify-between items-center w-auto">
          <Button color="gray_50" size="lg" className="w-[100px] rounded-[17px] mr-[30px]">
          Welcome User!
          </Button>
          <Button color="gray_50" size="lg" className="w-[80px] rounded-[17px]">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
