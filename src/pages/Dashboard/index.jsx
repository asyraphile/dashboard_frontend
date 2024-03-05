import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, SelectBox, GoogleMap } from "../../components";
import Header from "../../components/Header";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    // Additional logic if needed
  };

  const handleApply = () => {
    if (selectedFilter === "Filter 2") {
      // Redirect to a different page or perform other actions
      window.location.href = "/different-page";
    }
    else if (selectedFilter === "Filter 1") {
      // Redirect to a different page or perform other actions
      window.location.href = "/";
    }
  };
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full pb-[68px] bg-gray-50">
        <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
        <Text style={{ color: 'rgb(59, 130, 246)' }} className="h-[30px] mt-6 ml-7 mr-[97px]">Dashboard App</Text>
        <Menu
      menuItemStyles={{
        button: {
          padding: "10px 10px 10px 28px",
          width: "100%",
          fontWeight: 400,
          fontSize: "16px",
          gap: "12px",
          [`&:hover, &.ps-active`]: {
            color: "#438ffe",
            fontWeight: "500 !important",
            backgroundColor: "#edf5ff !important",
          },
        },
      }}
      renderExpandIcon={() => (
        <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] cursor-pointer" />
      )}
      className="flex flex-col items-center justify-start w-full mt-[65px]"
    >
      <MenuItem
        button
        selected={selectedFilter === "Filter 1"}
        onClick={() => handleFilterClick("Filter 1")}
        icon={<Img src="images/img_frame_20.svg" alt="image_five" className="h-[20px] w-[20px]" />}
        style={{ backgroundColor: selectedFilter === "Filter 1" ? "#edf5ff" : "transparent" }} // Highlight selected filter
      >
        Filter 1
      </MenuItem>
      <MenuItem
        button
        selected={selectedFilter === "Filter 2"}
        onClick={() => handleFilterClick("Filter 2")}
        icon={<Img src="images/img_frame_20.svg" alt="image_five" className="h-[20px] w-[20px]" />}
        style={{ backgroundColor: selectedFilter === "Filter 2" ? "#edf5ff" : "transparent" }} // Highlight selected filter
      >
        Filter 2
      </MenuItem>
      <MenuItem
        button
        style={{
          padding: "5px 10px", // Adjust padding for smaller button
          width: "auto", // Allow button to adjust width based on content
          fontWeight: 400,
          fontSize: "16px",
          gap: "12px",
          border: "1px solid #8c8787", // Add border
          transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
          ":hover, :focus": {
            color: "#438ffe",
            backgroundColor: "#edf5ff",
            borderColor: "#438ffe",
            marginRight:"0",
          }
        }}
        onClick={handleApply}
        className="mr-[1px]" // Remove margin on the right
      >
        Apply
      </MenuItem>
    </Menu>
        </Sidebar>
        <div className="flex flex-col items-center justify-start w-[83%] gap-[37px]">
          <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
          <div className="flex flex-col items-start justify-start w-[94%] gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[7px]">
            </div>
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[33%] gap-6 p-[30px] bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18300.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[40%] mr-[23px] gap-[7px]">
                  <Heading size="md" as="h1">
                    2560
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Menus
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[33%] gap-6 p-[30px] bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18276.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[47%] mr-2.5 gap-1.5">
                  <Heading size="md" as="h2">
                    $87,256
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Revenew
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[33%] gap-6 p-[30px] bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18277.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[50%] mr-[5px] gap-[7px]">
                  <Heading size="md" as="h3">
                    2560k
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Customer
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
              <div className="flex flex-col items-center justify-center w-full gap-6 p-5 bg-white-A700 shadow-md rounded-[15px]">
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <Text size="lg" as="p" className="!font-medium">
                    Recent Oder Request
                  </Text>
                  <SelectBox
                    color="blue_50"
                    variant="outline"
                    indicator={<Img src="images/img_caretdown.svg" alt="caret-down" />}
                    name="monthly_three"
                    placeholder="Monthly"
                    options={dropDownOptions}
                    className="w-[16%] gap-px"
                  />
                </div>
                <div className="flex flex-col w-full mb-2 gap-3">
                  <div className="flex flex-row justify-between items-center w-full ml-[3px]">
                    <div className="flex flex-row justify-center items-center w-[78%]">
                      <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                        <Img src="images/img_rectangle_4144.png" alt="image" className="w-[21%] object-cover rounded" />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text as="p" className="w-[99%] ml-0.5">
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-0.5">
                        <Text as="p">Marvin McKinney</Text>
                        <Text size="s" as="p" className="!text-blue_gray-400 !leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text as="p" className="ml-7">
                        $12.5
                      </Text>
                      <Text as="p" className="h-[17px] ml-[30px]">
                        X2
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Button color="blue_50" className="w-full font-medium">
                        Pending
                      </Button>
                    </div>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                      <div className="flex flex-row justify-center items-center w-[78%]">
                        <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                          <Img
                            src="images/img_rectangle_4144_48x50.png"
                            alt="image"
                            className="w-[21%] object-cover rounded"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text as="p" className="w-[99%] ml-0.5">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-1">
                          <Text as="p">Jacob Jones</Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text as="p" className="ml-7">
                          $11.5
                        </Text>
                        <Text as="p" className="h-[17px] ml-[30px]">
                          X2
                        </Text>
                      </div>
                      <Button color="green_50" className="!text-green-400 font-medium min-w-[100px]">
                        Delivered
                      </Button>
                    </div>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-row justify-between items-center w-full ml-[3px]">
                    <div className="flex flex-row justify-center items-center w-[78%]">
                      <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                        <Img
                          src="images/img_rectangle_4144_1.png"
                          alt="image"
                          className="w-[21%] object-cover rounded"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text as="p" className="w-[99%] ml-0.5">
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-[3px]">
                        <Text as="p">Cody Fisher</Text>
                        <Text size="s" as="p" className="!text-blue_gray-400 !leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text as="p" className="ml-7">
                        $42.5
                      </Text>
                      <Text as="p" className="h-[17px] ml-[30px]">
                        X2
                      </Text>
                    </div>
                    <Button color="blue_50" className="font-medium min-w-[100px]">
                      Pending
                    </Button>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                      <div className="flex flex-row justify-center items-center w-[78%]">
                        <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                          <span className="text-gray-700_01">Mohan Cudhidi</span>
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text as="p" className="w-[99%] ml-0.5">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-1">
                          <Text as="p">Esther Howard</Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text as="p" className="ml-7">
                          $92.5
                        </Text>
                        <Text as="p" className="h-[17px] ml-[30px]">
                          X2
                        </Text>
                      </div>
                      <Button color="green_50" className="!text-green-400 font-medium min-w-[100px]">
                        Delivered
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
