export function getList() {
    return fetch('https://61eq041wd8.execute-api.us-east-1.amazonaws.com/beta/DonutDBFunction')
      .then(data => data.json())
  }