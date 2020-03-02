# ASSESSMENT 4: Ruby Coding Practical Questions

#   Austin Majeski


=begin
///***********************************************************///
//             Function used to format logging                 //
///***********************************************************///
=end

require 'json'
#/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 LENGTH            =  55
 LINE              =   "_" * LENGTH
 BLOCK             =   Integer("0x2588").chr("UTF-8")
 BLOCK_LINE        =   BLOCK * LENGTH
 SPACE             =   "    "
 ESC               =   27.chr
 
 BLUE_BACKGROUND   =   ""#ESC+"[48;5;217m"
 WHITE_BACKGROUND  =   ESC+"[48;5;15m"
 BLACK_BACKGROUND = ESC+"[48;5;0m"
 
 WHITE_TEXT        =   ""#ESC+"[38;5;15m"
 GREEN_TEXT = ESC+"[38;5;2m"
 
 FORMAT_RESET      =   ESC+"[0m"

def log ( title, logs=[] )  
    puts "\n\n#{BLUE_BACKGROUND} #{WHITE_BACKGROUND}#{BLOCK_LINE}#{FORMAT_RESET}#{BLUE_BACKGROUND}\n\n#{SPACE}#{title}\n #{LINE}\n\n\n"

    logs.each { |w| 
      if w.kind_of?(Array)
        output = SPACE + "[ "
        index = 0
        w.each { |v|
           if  index < w.length - 1 
                output += "#{v}, "
                index += 1
           else
                output += v.to_s 
           end  
        }
        puts output + " ]"
      elsif w.kind_of?(Hash)
        keys = collect_recursive_keys( w )
        values = []
        pretty_hash = JSON.pretty_generate(w).gsub(":", " =>").gsub("\n","\n#{SPACE}").gsub("},", "},\n")
        keys.each { |k| pretty_hash.gsub!( "\"#{k}\" =>",":#{k} =>") }
        puts "#{SPACE}#{pretty_hash}"
      else
        puts SPACE + w.to_s 
      end
      
    }
    puts "\n #{LINE}\n #{LINE}\n\n\n"
end



def collect_recursive_keys ( hash_in, keys=[] )
  keys.concat( hash_in.keys ).uniq!
  hash_in.each { |v| 
    if v[1].kind_of?(Hash)
      keys.concat( collect_recursive_keys( v[1], keys ) ).uniq!
    end
  }
  return keys
end


def collect_recursive_classes ( hash_in, values=[] )

  values.concat( hash_in.values ).uniq!
  hash_in.each { |v| 
    if v[1].kind_of?(Hash)
      values.concat( collect_recursive_classes( v[1], values ) ).uniq!
    end
  }

  classes = []
  values.each { |c|
    puts "\n - #{c.to_s}"
    if c.kind_of?(Class)
      classess << "<#{c.to_s}>"
    end
  }

  return classes
end



puts "\n" + BLUE_BACKGROUND + WHITE_TEXT + "\n"
#/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


=begin
##       log function testing

my_hash = {:hello => "goodbye", :goob => 77, :keyhole => true}
my_internal_hash = {:hello => "goodbye", :goob => 77, :H => { :L => "poop", :D => 8 }, :keyhole => true}
dimentional_hash = {:one => {:two => {:pp => 3, :three => {:four => {:five => "end", :f => "five"}}}}}

log(  "Hippo", 
[
      "Value",
      "Goob",
      [1,23,45,6],
      my_hash,
      true,
      my_internal_hash,
      "I herby delare!...",
      "",
      dimentional_hash,
      ""
])
=end


#puts collect_recursive_classes( my_internal_hash )


# =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*=








=begin
///***********************************************************///
//                    Assignment Start                         //
///***********************************************************///
=end



=begin

	[ ! ]   IMPORTANT   [ ! ]     
	
	using Ruby version 2.5.5
	(p157)

=end





# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']			# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']		# Expected output: [-823, 7, 23]


def getNumbersLeastToGreatest (arr_in)

	arr_in.select{ |num| num.is_a?(Fixnum) }.select{ |num| num%2!=0 }.sort

end


log(  "Numbers from Array: Least To Greatest",
[
      getNumbersLeastToGreatest(fullArr1),
      getNumbersLeastToGreatest(fullArr2)
])


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

##   >>>  ANSWERED  BELOW  QUESTION  5  <<<

# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
# Expected output example: my_bike.ring_bell => 'Beep beep!'

# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
# Expected output example: my_bike.speed => 0

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0


class Bike
  def initialize (model, fr_sz, wheels=2)
    @model = model
	@wheels = wheels
	@frame_size = fr_sz
	@speed = 0
  end
  
  def get_info	# QUESTION  2
	"This #@model bicycle has #@wheels wheels, and a frame size of #@frame_size cm."
  end
  
  def ring_bell	# QUESTION  3
	"This bicycle will self destruct in 5..4..3..2...."
  end
  
  def speedometer	# QUESTION  4
	@speed
  end
  
  
  	# QUESTION  5
  
  def pedal
	@speed+=10
  end
  
  def brake
	@speed-=15
	if @speed < 0 
		@speed = 0
	end
  end
	
end


#  Storing Values
# - - - - - - - - - - - - - - - -
 supreme_bike = Bike.new("Icicle",25)
 
 starting_SPEED = supreme_bike.speedometer
 pedalled_bike_SPEED = supreme_bike.pedal
 braked_bike_SPEED = supreme_bike.brake
 # - - - - - - - - - - - - - - - -
  

log(	"Bicycle Class",
[
		"#{BLACK_BACKGROUND}#{GREEN_TEXT}  Get Info  #{FORMAT_RESET}   :  #{supreme_bike.get_info}",
		"",
		"#{BLACK_BACKGROUND}#{GREEN_TEXT}  Ring Bell  #{FORMAT_RESET}  :  #{supreme_bike.ring_bell}",
		"",
		"#{BLACK_BACKGROUND}#{GREEN_TEXT}  Speedometer  #{FORMAT_RESET}    :  #{starting_SPEED}",
		"",
		"#{BLACK_BACKGROUND}#{GREEN_TEXT}  Pedal (Speed)  #{FORMAT_RESET}  :  #{pedalled_bike_SPEED}",
		"",
		"#{BLACK_BACKGROUND}#{GREEN_TEXT}  Brake (Speed)  #{FORMAT_RESET}  :  #{braked_bike_SPEED}"
])











puts "\n#{FORMAT_RESET}\n"
#EOF