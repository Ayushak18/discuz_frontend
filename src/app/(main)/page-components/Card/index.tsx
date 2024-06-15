import * as React from "react"
import { Button } from "@/components/ui/button"
import {Card, CardContent, CardFooter} from "@/components/ui/card"

export function CardWithForm({image,isRequested, title,description}:{image:any, isRequested:any, title:any, description:any}) {
  return (
    <Card className={`w-[30%] ${isRequested ? 'h-[45%]': 'h-[35%]'} min-h-[320px] my-4 flex flex-col justify-between rounded-2xl`}>
      <div className="bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3] p-2  h-[60px] relative px-4 rounded-t-2xl ">
        <div className="p-2 rounded-xl border-gray-300 mt-5 bg-white border-2 w-fit">
            <img
                    src={image}
                    className="w-12 h-12 rounded-full"
                    alt="Project Logo"
            ></img>
        </div>
      </div>
      <CardContent className="mt-12 cursor-pointer">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col text-[18px] font-semibold">
              <p>{title}</p>
            </div>
            <div className="flex flex-col  text-justify leading-tight">
                <p className="line-clamp-4">{description}</p>
          </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={`${isRequested? 'flex': 'hidden'}  justify-between`}>
        <Button className="text-blue-500">Decline Request</Button>
        <Button className="bg-gray-100 hover:bg-gray-200 rounded-full">Accept Request</Button>
      </CardFooter>
    </Card>
  )
}
