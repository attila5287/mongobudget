let all;

async function fetch_api () {
    let result;

    try {
        result = await fetch(
        '/api/transaction',
        );

      return result.json();
      
    } catch (error) {
        console.error(error);
    }
}

const init = async () => {
  all = await fetch_api();
  
  table_update( all );
  populateChart( all );
  
};

init();


