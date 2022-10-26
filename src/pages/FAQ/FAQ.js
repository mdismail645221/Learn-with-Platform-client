import React from 'react';

const FAQ = () => {
    return (
        <div className='my-16'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl flex justify-center space-y-4">এই প্লাটফম থেকে কি কি শিখতে পারবে:</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Why learn Math?</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">Mathematics is very important subject. So we want to support you by recording 10 assignments and more than 50 BVs for you! Moreover, many reputed teachers of mathematics will take this class.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Biology</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">তুমি কি ভালো, অভিজ্ঞ শিক্ষক দ্বারা জীববিজ্ঞান শিখতে চাও? তোমার জন্য SPECIAL OFFER , খুব সহজে নামিদামি শিক্ষকদ্বারা লুটে নাও জীববিজ্ঞান বিয়টি।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Chemistry</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">তোমার জন্য থাকছে 13টি অ্যাসাইনমেন্ট এবং 80 টি বেশি ভিজুয়াল কনটেন্ট ভিডিও। সুতরাং আর দেরি কেন ! ফটাফট করে ক্লাস গুলো অ্যাক্সেস করে শিক্ষা শুরু করে দাও। </p>
                        </div>
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Higher Math</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">এই উচ্চতর গণিত ফ্রি কোর্সে থাকবে বি.সি.এস প্রাপ্ত শিক্ষক। যারা সুন্দর  করে উচ্চতর বিষয়টি তুলে ধরবেন। আশা করি তুমি অনেক কিছু শিখতে পারবে। এই ফ্রি কনটেন্ট এ থাকবে 11টি অ্যাসইনমেন্ট এবং 70টি ভিডিও।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Physics</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">এই পদার্থ বিজ্ঞান ফ্রি কোর্স কনটেন্ট  এ থাকছে ...মোট 10টি অ্যাসাইনমেন্ট এবং 100টি ভিডিও। দেশের সুনামধন্য শিক্ষকরা এই কোর্স করাবে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold flex items-center space-x-3  py-2 px-2">
                                <input type="checkbox" checked className="checkbox checkbox-primary" /> 
                                <p className='text-2xl'>Science</p>
                            </h3>
                            <p className="mt-1 dark:text-gray-400">এই পদার্থ বিজ্ঞান ফ্রি কোর্স কনটেন্ট  এ থাকছে ...মোট 10টি অ্যাসাইনমেন্ট এবং 100টি ভিডিও। দেশের সুনামধন্য শিক্ষকরা এই কোর্স করাবে।</p>
                        </div>
                        
                       
                    </div>
                </div>
            </section>
        </div>

    );
};

export default FAQ;