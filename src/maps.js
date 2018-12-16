const maps = {
  'chapter1': {
    'chiharuRoom': {
      "field": [[127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 36, 37, 37, 37, 37, 37, 38,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 66, 67, 67, 67, 67, 67, 68,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 66, 67, 67, 67, 67, 67, 68,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 66, 67, 67, 67, 67, 67, 68,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 66, 67, 67, 67, 67, 67, 68,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 66, 67, 67, 67, 67, 67, 68,127,127,127,127,127,127,127],
                [127,127,127,127,127,127, 96, 97, 97, 97, 97, 97, 98,479,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
                [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127]],
      "objects": [[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1,234,235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1,324,326,264,265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1,354,356,294,295, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1,149, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1,179, -1, -1, -1, -1, -1, -1,449, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1,209, -1, -1, -1, -1, -1, -1,449, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,479, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
      "collision": [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
      "start": {x: 9, y: 7},
      "stairs": {1: {x:12 , y:9 }, 2: {x:12 , y:10 }}
    },
    'living': {
      "field": [[  1,  1,  1,162,163,163,163,163,163,163,163,163,163,163,163,163,164,  1,  1,  1],
                [  1,  1,  1,192,193,193,193,193,193,193,283,193,193,193,193,193,194,  1,  1,  1],
                [  1,  1,  1,222,223,223,223,223,223,223,283,223,223,223,223,223,224,  1,  1,  1],
                [  1,  1,  1, 36, 37, 37, 37, 37, 37, 37,283, 37, 37, 37, 37, 37, 38,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67,283, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67,283, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67,253, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67,283, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67,313, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 66, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 68,  1,  1,  1],
                [  1,  1,  1, 96, 97, 97, 96, 97, 97, 97, 97, 97, 97, 97, 97, 97, 98,  1,  1,  1],
                [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]],

      "objects": [[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1,239,239,239,239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1,269,268,268,267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1,299,298,298,298, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1,354,356, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1,198,200, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                  [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],

      "collision": [[  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]]
    }
  }
}
