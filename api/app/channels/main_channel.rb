class MainChannel < ApplicationCable::Channel
    def subscribed
        puts "subscribed to channel"

        stream_from "main"
    end
    def receive(action)
        
        case action["type"]
        when "SERVER_ACTION/VOTE"
            puts "CABLECAR ACTION: SERVER_ACTION/VOTE"
            @vote = Vote.new(card_id: action["payload"]["card_id"])
            if @vote.save
                @card = Card.find(action["payload"]["card_id"])
                @card_with_votes = @card.attributes.merge(votes: @card.votes.count)
                ActionCable.server.broadcast("main", { type: "SERVER_ACTION/VOTES_UPDATED", payload: { card: @card_with_votes }})
            end
        when "SERVER_ACTION/NEW_TOPIC"
            puts "CABLECAR ACTION: SERVER_ACTION/CREATE_CARD"
            @card = Card.new(title: action["payload"]["title"])
            puts @card
            if @card.save
                ActionCable.server.broadcast("main", { type: "SERVER_ACTION/CREATE_CARD", payload: { card: @card }})
            end
        end

    end
end