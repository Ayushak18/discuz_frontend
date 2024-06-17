import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const data={
  image : './display-picture/display.png',
  title:'rendom text about the data in the database and the backennd',
  expanded_description:'rendom text about the data in the database and the backennd rendom text about the data in the database and the backennd rendom text about the data in the database and the backennd',
  place: 'Pune',
  budget_min: 2000,
  budget_max: 3000,
};

export const ContentTile = ({ content }: { content: any }) => {
  return (
    <>
      <Accordion type="single" className="my-4" collapsible>
        <AccordionItem className='p-2 items-center rounded-2xl bg-white mx-auto py-4 w-[700px]' value="item-1">
          <div className="flex justify-around w-[100%]">
            <img src='./display-picture/display.png' className="w-16 h-16 my-auto rounded-full"></img>
            <AccordionTrigger className="w-[570px]"><p className=" line-clamp-1 mr-8">{content.title}</p></AccordionTrigger>
          </div>
         
          <AccordionContent className="px-4 mt-8">
          <div className="header flex justify-start my-4">
                <div className="info text-right">
                  <div className="inline-block">
                    <span className="text-gray-500">Location: </span>
                    <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">
                      {content.place || "India"}
                    </span>
                  </div>
                  <div className="inline-block ml-4">
                    <span className="text-gray-500">Budget:</span>{" "}
                    <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                      {content.budget_min}
                    </span>{" "}
                    -{" "}
                    <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                      {content.budget_max}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-justify">{content.expanded_description}</p>
              <div className="flex  flex-col items-end mt-4">
                <Button className="bg-blue-500 hover:bg-green-500 rounded-2xl text-white">Accept</Button>
              </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ContentTile;
