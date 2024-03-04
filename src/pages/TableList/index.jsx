import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar3 from "../../components/Sidebar3";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table",
    tablefloor: "Floor G-05",
    amount: "$82.48",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-04",
    amount: "$83.48",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$82.46\t",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-02",
    amount: "$87.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor G-05",
    amount: "$90.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table ",
    tablefloor: "Floor S-03",
    amount: "$12.46",
    satusorder: "Booked\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor S-01",
    amount: "$92.46",
    satusorder: "Available\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "23 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$32.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "218 June 2020, 12:42 AM",
    tabletype: "Brooklyn Simmons",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Booked",
  },
];

export default function TableListPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("tableidone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table ID{" "}
          </Text>
        ),
        meta: { width: "111px" },
      }),
      tableColumnHelper.accessor("bookdate", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Book Date
          </Text>
        ),
        meta: { width: "213px" },
      }),
      tableColumnHelper.accessor("tabletype", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Type
          </Text>
        ),
        meta: { width: "196px" },
      }),
      tableColumnHelper.accessor("tablefloor", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Floor
          </Text>
        ),
        meta: { width: "191px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Amount
          </Text>
        ),
        meta: { width: "137px" },
      }),
      tableColumnHelper.accessor("satusorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Button color="green_50" className="mt-[33px] mb-3.5 font-medium min-w-[99px]">
              {info?.getValue?.()}
            </Button>
            <Img src="images/img_frame_13.svg" alt="image_five" className="h-[20px] w-[20px] mb-5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus Order
          </Text>
        ),
        meta: { width: "211px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row justify-start items-start w-full gap-0.5">
          <Sidebar3 className="w-[251px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" />
          <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
            <header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs">
              <div className="flex flex-row justify-between items-center w-[99%]">
                <Input
                  name="search"
                  placeholder="Search here"
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e)}
                  suffix={
                    searchBarValue3?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue3("")} height={16} width={16} fillColor="#8c8787ff" />
                    ) : (
                      <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
                    )
                  }
                  className="w-[29%] gap-[35px] border-gray-50"
                />
                <div className="flex flex-row justify-between items-center w-auto">
                  <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                    <Img src="images/img_group_257.svg" />
                  </Button>
                  <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                    <Img src="images/img_group_259.svg" />
                  </Button>
                  <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                </div>
              </div>
            </header>
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <Text size="xl" as="p">
                    Table List
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Add Table /Table List
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full p-[25px] bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[1059px] my-[3px]"
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="!font-poppins text-center">
                    Dispalying 10 Out of 250
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
                    <Text as="p" className="text-center">
                      10-250
                    </Text>
                    <div className="flex flex-row justify-start w-[49%]">
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] z-[1]">
                        <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_white_a700.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                        <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_blue_a200.svg" />
                        </Button>
                      </div>
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
