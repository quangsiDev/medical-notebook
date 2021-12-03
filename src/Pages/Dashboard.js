import React from 'react'

export default function Dashboard() {
    return (
        <div className="w-full p-5">
            <div className=" space-y-5">

                <div className="bg-white p-3 rounded-md shadow-lg">
                    <p className="font-medium">Xin chào User!</p>
                </div>
                <div className="bg-white p-3 rounded-md shadow-lg space-y-3">
                    <p className="font-medium">Record gần đây</p>
                    <p>Ngày : 1/1/2022</p>
                    <p>Tên bệnh: Lorem, ipsum dolor.</p>
                    <p>Chuẩn đoán từ bác sĩ: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis maiores corporis nemo repudiandae corrupti fugiat, quam at provident nisi autem vitae nesciunt ullam officia vero iure unde dignissimos aspernatur eveniet?</p>

                </div>
                <div className="bg-white p-3 rounded-md shadow-lg space-y-3">
                    <p className="font-medium">Lịch sử truy cập</p>
                    <div className="flex justify-start space-x-3">
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                        <div className="bg-blue-300 rounded-lg shadow-lg p-3 px-4 ">Ngày : 1/1/2022</div>
                    </div>


                </div>
            </div>
        </div>
    )
}
