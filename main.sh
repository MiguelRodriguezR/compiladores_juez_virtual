echo "#include <iostream>
#include <sstream>
#include <string>
#include <cstdlib>
using namespace std;
int main(int argc, const char*argv[])
{
    float a,b,c;
    a=argv[1];
    b=argv[2];
    cout<<a<<\"+\"<<b<<\"=\"<<endl;
    return 0;
}" > test.cpp
g++ test.cpp -o testexe
chmod +x testexe
a=1
b=2
./testexe  $a $b
rm ejec
rm test.cpp