/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


export default function Example() {

    const onSubmit = async (data) =>{

        // const res = await fetch('http://localhost:800/api/hello',{
        //   method : 'POST',
        //   body : JSON.stringify(data)
        // }).then(res => res.json())
        // .then(
        //   (result) => {
    
        //     setItems(result.users);
    
        //     console.log(items);
        //   },
        //   // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        //   // чтобы не перехватывать исключения из ошибок в самих компонентах.
        //   (error) => {
    
        //   }
        // )
        
        console.log(data);

      }

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Регистрация
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Имя
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      autoComplete="firstName"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="surName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Фамилия
                  </label>
                  <div className="mt-1">
                    <input
                      id="surName"
                      name="surName"
                      type="surName"
                      autoComplete="surName"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fatherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Отчество
                  </label>
                  <div className="mt-1">
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="fatherName"
                      autoComplete="fatherName"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="login"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Логин
                  </label>
                  <div className="mt-1">
                    <input
                      id="login"
                      name="login"
                      type="login"
                      autoComplete="login"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>


                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Телефон
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Пароль
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </>
    );
  }