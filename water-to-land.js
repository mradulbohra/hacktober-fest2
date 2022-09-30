<script>



function dist(p1,p2)
{

	return Math.abs(p1[0] - p2[0])
		+ Math.abs(p2[1] - p1[1]) - 1;
}

function floodfill(hash,i,j, A)
{


	if (i < 0 || i >= A.length || j < 0
		|| j >= A[0].length || A[i][j] != 'L') {
		return;
	}


	A[i][j] = 'V';



	hash.add([i, j]);



	floodfill(hash, i - 1, j, A);
	floodfill(hash, i + 1, j, A);
	floodfill(hash, i, j - 1, A);
	floodfill(hash, i, j + 1, A);
}

function findMinimumW(A)
{


	if (A.length == 0)
		return;



	let hash1 = new Set(), hash2 = new Set();


	for (let i = 0; i < A.length; i++) {

		for (let j = 0; j < A[0].length; j++) {

		
			if (A[i][j] == 'L') {

			
			
				if (hash1.size == 0) {
					floodfill(hash1, i, j, A);
				}

			
			
				if (hash2.size == 0 && !hash1.has([ i, j ])) {
					floodfill(hash2, i, j, A);
				}
			}
		}
	}


	let ans = Number.MAX_VALUE;


	for (let i of hash1) {
		for (let j of hash2) {
			ans = Math.min(ans, dist(i, j));
		}
	}


	document.write(ans,"</br>");
}


let arr = [ [ 'W', 'L' ], [ 'L', 'W' ] ];

findMinimumW(arr);


</script>
