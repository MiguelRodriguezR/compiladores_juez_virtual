echo "#include <iostream>
using namespace std;
int main()
{
    std::cout <<  \"Hola Mundo!\";
    return 1;
}" > hola.cpp
g++ -o ejec hola.cpp 
./ejec
rm ejec
rm hola.cpp